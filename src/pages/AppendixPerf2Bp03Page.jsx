import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf2Bp03Page() {
  return (
    <article className="doc-content">
      <h1>PERF02-BP03 — 올바른 크기 조정</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>실제 사용 패턴과 메트릭을 기반으로 인스턴스 크기를 지속적으로 최적화하여 성능과 비용을 균형 있게 유지합니다.</p>
      <h2>원하는 결과</h2>
      <p>실제 워크로드에 맞게 적절히 크기가 조정된 컴퓨팅 리소스를 운영합니다. 과도한 프로비저닝 없이 성능 요구사항을 충족하고, 지속적인 모니터링으로 최적 상태를 유지합니다.</p>
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
