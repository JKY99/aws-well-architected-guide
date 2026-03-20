import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel1Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL01-BP03 — 아키텍처를 통해 고정 서비스 할당량 및 제약 사항 수용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 수립하지 않으면 중간 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        변경 불가능한 서비스 할당량, 서비스 제약 사항 및 물리적 리소스 한도를 파악하십시오.
        이러한 한도가 안정성에 영향을 미치지 않도록 애플리케이션과 서비스의 아키텍처를 설계하십시오.
        고정 제약 사항의 예로는 네트워크 대역폭, 서버리스 함수 호출 페이로드 크기,
        API Gateway 스로틀 버스트 속도 등이 있습니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        애플리케이션 또는 서비스가 해당 리소스의 고정 제약 사항 또는 서비스 할당량 내에서 작동하도록 설계되어,
        정상 및 높은 트래픽 조건 모두에서 예상대로 성능을 발휘합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>확장 시 서비스 설계 제약으로 인한 장애가 발생할 수 있다는 점을 모르는 채 설계 선택</li>
        <li>비현실적인 벤치마킹 수행(예: 장시간 버스트 한도에서 테스트 실행)</li>
        <li>고정 할당량 초과 시 확장하거나 수정할 수 없는 설계 선택(예: SQS 256KB 페이로드 크기 한도)</li>
        <li>높은 트래픽 중 서비스 할당량 임계값 모니터링 및 경보를 위한 가시성 미구현</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>예상되는 모든 서비스 부하 수준에서 애플리케이션이 중단 또는 저하 없이 실행되는지 검증</li>
        <li>아키텍처 설계 시 하드 한도를 고려하여 이후 재설계 비용 절감</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>애플리케이션 설계에 계획된 모든 AWS 서비스 검토</li>
        <li>소프트 및 하드 할당량 한도 모두 검토(Service Quotas 콘솔에서 ADJUSTABLE=No 확인)</li>
        <li>비즈니스 및 기술 요구 사항에 따라 분산 시스템 설계 결정</li>
        <li>영역 및 리전 장애 시 리소스 사용량에 대한 복원력 아키텍처 분석</li>
        <li>스트레스 테스트, 부하 테스트, 카오스 테스트를 구현하여 하드 한도 도달 가능성 파악</li>
        <li>Lambda의 경우 최대 실행 시간(15분)과 같은 고정 한도 파악 및 대안 기술 고려</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Service Quotas</li>
        <li>Amazon CloudWatch</li>
        <li>AWS Trusted Advisor</li>
        <li>Amazon DevOps Guru</li>
        <li>AWS Systems Manager</li>
        <li>AWS Config</li>
      </ul>
      <PageNav />
    </article>
  );
}
