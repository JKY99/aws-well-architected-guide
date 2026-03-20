import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel5Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL05-BP02 — 요청 스로틀링</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        갑작스러운 고객 트래픽 증가, 플러딩 공격 또는 재시도 폭풍으로 인한 대량 스파이크는
        요청 스로틀링으로 완화하여 워크로드가 지원되는 요청 볼륨의 정상 처리를 계속할 수 있도록 합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        스로틀 한도를 설정한 워크로드는 예상치 못한 볼륨 스파이크 하에서 수락된 요청 로드를 정상적으로 처리합니다.
        API와 큐에 대한 갑작스럽거나 지속적인 요청 스파이크가 스로틀링되어 요청 처리 리소스를 고갈시키지 않습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>API 엔드포인트 스로틀이 구현되지 않았거나 예상 볼륨을 고려하지 않고 기본값으로 방치</li>
        <li>API 엔드포인트 부하 테스트 또는 스로틀링 한도 테스트 미실시</li>
        <li>요청 크기나 복잡성을 고려하지 않고 요청 속도만 스로틀링</li>
        <li>최대 요청 속도 또는 최대 요청 크기를 테스트하지만 두 가지를 함께 테스트하지 않음</li>
        <li>테스트에서 수립된 한도와 동일하게 리소스가 프로비저닝되지 않음</li>
        <li>애플리케이션 간(A2A) API 소비자에게 사용 계획이 구성되지 않음</li>
        <li>수평으로 확장하는 큐 소비자에 최대 동시성 설정 미구성</li>
        <li>IP 주소별 속도 제한 미구현</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>스로틀 한도를 설정한 워크로드가 예상치 못한 볼륨 스파이크 하에서 정상적으로 운영</li>
        <li>API와 큐에 대한 갑작스러운 또는 지속적인 요청 스파이크 스로틀링</li>
        <li>속도 제한으로 단일 IP 주소 또는 API 소비자의 대량 트래픽이 리소스를 고갈시키거나 다른 소비자에게 영향을 주지 않음</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>알려진 용량의 요청을 처리하도록 서비스 설계(부하 테스트를 통해 수립)</li>
        <li>토큰 버킷 알고리즘 구현: 토큰은 초당 스로틀 속도로 보충되고 요청마다 하나씩 비워짐; HTTP 429 (Too Many Requests) 반환</li>
        <li>Amazon API Gateway: 계정/리전별로 토큰 버킷 알고리즘 구현, 사용 계획으로 클라이언트별 구성 가능</li>
        <li>Amazon SQS 및 Amazon Kinesis: 요청을 버퍼링하여 요청 속도를 고르게 하고 더 높은 스로틀링 속도 허용</li>
        <li>AWS WAF: 비정상적으로 높은 부하를 생성하는 특정 API 소비자에 대한 속도 제한 구현</li>
        <li>Lambda 최대 동시성 구성(SQS를 이벤트 소스로 사용 시)</li>
        <li>구현 전 한도 테스트 및 테스트된 한도 문서화</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon API Gateway</li>
        <li>AWS AppSync</li>
        <li>Amazon SQS (Simple Queue Service)</li>
        <li>Amazon Kinesis</li>
        <li>AWS WAF (Web Application Firewall)</li>
        <li>AWS Lambda</li>
      </ul>
      <PageNav />
    </article>
  );
}
