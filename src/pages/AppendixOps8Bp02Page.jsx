import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps8Bp02Page() {
  return (
    <article className="doc-content">
      <h1>OPS08-BP02 — 워크로드 로그 분석</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        철저한 로그 분석을 통해 애플리케이션 동작 및 운영에 대한 풍부한 인사이트를 도출하고,
        문제를 사전에 감지하고 완화합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        로그 분석을 통해 운영 병목, 보안 위협 및 기타 잠재적 문제를 사전에 식별합니다.
        로그 데이터를 지속적인 애플리케이션 최적화에 효율적으로 활용합니다.
        애플리케이션 동작에 대한 향상된 이해로 디버깅 및 문제 해결이 용이해집니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>중요한 문제가 발생할 때까지 로그 분석을 소홀히 하는 경우</li>
        <li>중요한 인사이트를 놓치는 로그 분석을 위한 전체 도구 세트를 활용하지 않는 경우</li>
        <li>자동화 및 쿼리 기능을 활용하지 않고 수동으로만 로그를 검토하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>운영 병목, 보안 위협 및 기타 잠재적 문제의 사전 식별</li>
        <li>지속적인 애플리케이션 최적화를 위한 로그 데이터의 효율적 활용</li>
        <li>디버깅 및 문제 해결을 돕는 애플리케이션 동작에 대한 향상된 이해</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>애플리케이션 및 서비스가 CloudWatch Logs로 로그를 전송하도록 구성합니다.</li>
        <li>Amazon CloudWatch Logs 이상 감지를 활용하여 비정상적인 패턴을 자동으로 식별합니다.</li>
        <li>CloudWatch Logs Insights를 설정하여 패턴 분석과 비교 기능으로 대화형 검색 및 분석을 수행합니다.</li>
        <li>CloudWatch Logs Live Tail을 사용하여 실시간 로그 보기를 모니터링합니다.</li>
        <li>Contributor Insights를 활용하여 높은 카디널리티 차원(IP 주소, 사용자 에이전트)의 상위 항목을 식별합니다.</li>
        <li>로그 데이터를 실행 가능한 메트릭으로 변환하기 위한 메트릭 필터를 구현합니다.</li>
        <li>정기적으로 로그 분석 전략을 검토하고 개선합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon CloudWatch Logs — 로그 분석을 위한 기본 도구</li>
        <li>CloudWatch Logs Insights — 대화형 검색 및 분석</li>
        <li>CloudWatch Contributor Insights — 높은 카디널리티 데이터 분석</li>
        <li>CloudWatch Logs 이상 감지 — 자동 패턴 감지</li>
        <li>CloudWatch 교차 계정 관찰 가능성 — 멀티 계정 모니터링</li>
      </ul>

      <PageNav />
    </article>
  );
}
