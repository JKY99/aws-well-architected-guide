import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf2Bp04Page() {
  return (
    <article className="doc-content">
      <h1>PERF02-BP04 — 컴퓨팅 리소스 구성 및 적정 크기 조정</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>실제 사용 패턴과 메트릭을 기반으로 컴퓨팅 리소스를 올바르게 구성하고 적정 크기로 조정합니다. 과도하거나 부족한 프로비저닝을 피하여 성능과 비용을 최적화합니다.</p>
      <h2>원하는 결과</h2>
      <p>실제 워크로드에 맞게 적절히 크기가 조정된 컴퓨팅 리소스를 운영합니다. 지속적인 모니터링을 통해 최적 상태를 유지합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>초기 선택한 인스턴스 크기를 재검토 없이 유지</li>
        <li>리소스 사용률 모니터링 없이 운영</li>
        <li>성능 분석 없이 과대 프로비저닝으로 안전 마진 확보</li>
        <li>비용 최적화 기회를 정기적으로 검토하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>불필요한 리소스 제거로 비용 최적화</li>
        <li>적절한 크기로 일관된 성능 보장</li>
        <li>지속적인 효율성 개선 문화 정착</li>
        <li>리소스 낭비 방지로 지속 가능한 운영</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon CloudWatch로 CPU, 메모리, 네트워크 사용률 지속 모니터링</li>
        <li>AWS Compute Optimizer의 권고 사항을 정기적으로 검토 및 적용</li>
        <li>최소 2주 이상의 사용률 데이터를 기반으로 크기 조정 결정</li>
        <li>크기 조정 후 성능 변화를 검증하고 문서화</li>
        <li>Lambda 함수의 메모리 크기를 조정하여 성능과 비용 균형 최적화</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Compute Optimizer — 인스턴스 크기 조정 권고</li>
        <li>Amazon CloudWatch — 리소스 사용률 모니터링</li>
        <li>Amazon EC2 — 다양한 인스턴스 크기 옵션</li>
        <li>AWS Cost Explorer — 비용 분석 및 최적화 기회 식별</li>
      </ul>
      <PageNav />
    </article>
  );
}
